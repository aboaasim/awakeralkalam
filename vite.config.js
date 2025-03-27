<span class="hljs-keyword">const</span> { defineConfig } = <span class="hljs-built_in">require</span>(<span class="hljs-string">'vite'</span>)
<span class="hljs-keyword">const</span> react = <span class="hljs-built_in">require</span>(<span class="hljs-string">'@vitejs/plugin-react'</span>)

<span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [<span class="hljs-title function_">react</span>()]
})
