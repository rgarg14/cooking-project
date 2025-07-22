export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🍷 <span className="wineverse-logo">WineVerse</span></div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/regions">Regions</a>
        <a href="/special">Special</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/signup">Signup</a>
        <a href="/login">Login</a>
        <a href="/cart">Cart</a>
        {/* <a href="/AgeVerification">Age</a> */}
      </div>
    </nav>
  );
}
