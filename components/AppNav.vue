<template>
  <header>
    <h1>Cyanide</h1>
    <nav>
      <ul>
        <li>
          <nuxt-link exact to="/">Shop</nuxt-link>
        </li>

        <li>
          <nuxt-link to="/cart">Cart</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  padding: 50px 50px 0;
}

nav {
  display: flex;
  width: 80vw;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  ul {
    padding-left: 0;
    li {
      display: inline;
      list-style-type: none;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 16px;
      padding: 0 20px;
      position: relative;
      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #2e882e;
        }
      }
    }
  }
}
</style>>

