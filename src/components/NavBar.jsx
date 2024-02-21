export default function NavBar({user}) {
  return (
    <>
      <a href="#home">Home </a>
      <a href="#home">Laptops </a>
      <a href="#contact">Contact </a>
      <a href="#about">About </a>
      {(user !== undefined) ? <h3>Welcome {user.firstName} {user.lastName} </h3> : <h3>Login</h3>}
      {(user.itemsInCart == 0) ? <h3></h3> : <h3> Items in Cart: {user.itemsInCart}</h3>}
    </>
  );
}
