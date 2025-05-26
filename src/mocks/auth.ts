import { faker } from "@faker-js/faker";

import mock from "./adapter";

import { User } from "@/types/user";
import { verify, sign } from "@/utils/jwt";

const JWT_SECRET = "super-secret-key";
const JWT_EXPIRES_IN = "3 days";

function fakeRequest(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

const users: User[] = [
  {
    id: "a8553063-7bd5-45ed-adbe-db6f069a3802",
    displayName: "Admin User",
    email: "admin@feralink.com",
    password: "admin123",
    avatar: "/static/img/avatars/avatar-1.jpg",
    role: "admin"
  },
  {
    id: "b9553064-8cd6-56fe-bcbf-ec7f070b4803",
    displayName: "Clinic Manager",
    email: "clinic@feralink.com",
    password: "clinic123",
    avatar: "/static/img/avatars/avatar-2.jpg",
    role: "clinic"
  },
  {
    id: "c1053065-9de7-67gf-cccg-fd8g081b5804",
    displayName: "Doctor Smith",
    email: "doctor@feralink.com",
    password: "doctor123",
    avatar: "/static/img/avatars/avatar-3.jpg",
    role: "doctor"
  },
  {
    id: "d2153066-0ef8-78hg-dddh-ge9h192c6805",
    displayName: "Client User",
    email: "client@feralink.com",
    password: "client123",
    avatar: "/static/img/avatars/avatar-4.jpg",
    role: "client"
  }
];

mock.onPost("/api/auth/sign-in").reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password } = JSON.parse(config.data);
    const user = users.find((_user) => _user.email === email);

    if (!user) {
      return [
        400,
        { message: "There is no user corresponding to the email address." },
      ];
    }

    if (user.password !== password) {
      return [400, { message: "Incorrect password" }];
    }

    const accessToken = await sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

mock.onPost("/api/auth/sign-up").reply(async (config) => {
  try {
    await fakeRequest(1000);

    const { email, password, firstName, lastName } = JSON.parse(config.data);
    let user = users.find((_user) => _user.email === email);

    if (user) {
      return [
        400,
        {
          message:
            "There already exists an account with the given email address.",
        },
      ];
    }

    user = {
      id: faker.datatype.uuid(),
      displayName: `${firstName} ${lastName}`,
      email,
      password,
      avatar: null,
    };

    const accessToken = await sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return [200, { accessToken, user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});

mock.onGet("/api/auth/my-account").reply(async (config) => {
  try {
    const { Authorization } = config.headers!;

    if (!Authorization) {
      return [401, { message: "Authorization token missing" }];
    }

    const accessToken = (Authorization as string).split(" ")[1];
    const data: any = await verify(accessToken, JWT_SECRET);
    const userId = typeof data === "object" ? data?.userId : "";
    const user = users.find((_user) => _user.id === userId);

    if (!user) {
      return [401, { message: "Invalid authorization token" }];
    }

    return [200, { user }];
  } catch (error) {
    console.error(error);
    return [500, { message: "Internal server error" }];
  }
});
