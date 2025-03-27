<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">'vite'</span>
<span class="hljs-keyword">import</span> react <span class="hljs-keyword">from</span> <span class="hljs-string">'@vitejs/plugin-react'</span>
<span class="hljs-keyword">import</span> path <span class="hljs-keyword">from</span> <span class="hljs-string">'path'</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [<span class="hljs-title function_">react</span>()],
  <span class="hljs-attr">resolve</span>: {
    <span class="hljs-attr">alias</span>: {
      <span class="hljs-string">'@'</span>: path.<span class="hljs-title function_">resolve</span>(__dirname, <span class="hljs-string">'./src'</span>)
    }
  },
  <span class="hljs-attr">server</span>: {
    <span class="hljs-attr">cors</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">headers</span>: {
      <span class="hljs-string">'Cross-Origin-Embedder-Policy'</span>: <span class="hljs-string">'credentialless'</span>
    }
  }
})
