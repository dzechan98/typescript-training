// Implicit typing (inferred)
let username = "Alice"; // inferred as string
username = "Bob"; // ✅ OK
username = 42; // ❌ Error: number not assignable to string

// Explicit typing
let age: number = 25;
age = 30; // ✅ OK
age = "thirty"; // ❌ Error: string not assignable to number
