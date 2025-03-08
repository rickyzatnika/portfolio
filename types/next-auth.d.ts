import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        role?: string; // ✅ Tambahin role ke tipe User
    }

    interface Session {
        user: User;
    }
}