export function initPage(el: HTMLElement): void {
  el.innerHTML = ` 
    <header>
      <h1>Client-side URL change examples</h1>
      <nav style="display: flex; justify-content: space-around">
        <a href="/home">Home</a>
        <a href="/contacts">Contacts</a>
        <a href="/about">About</a>
        <a href="/about/us">About / Us</a>
        <a href="/login">Login</a>
      </nav>
    </header>
    <article class="content"></article>
    `;
}
