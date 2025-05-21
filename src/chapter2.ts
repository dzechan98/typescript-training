// Interface

interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const user1: User = {
  id: 1,
  name: "Alice",
  isActive: true,
};

// Type Aliases

type Status = "success" | "error" | "loading";

type Account = {
  id: number;
  name: string;
  role?: string; // optional property
};

// Enum

enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

const currentRole: Role = Role.User;
