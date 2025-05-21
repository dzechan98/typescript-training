type User = {
  id: number;
  name: string;
  email?: string; // optional
};

function getUser(): User {
  return {
    id: 1,
    name: "Alice",
    // email is missing
  };
}

const user = getUser();
console.log(user.email.toUpperCase());
// ❌ Error: Object is possibly 'undefined'
