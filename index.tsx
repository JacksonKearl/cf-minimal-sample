import { render } from "preact"
import { useState } from "preact/hooks"

export function App() {
  const [state, setState] = useState(0)

  return (
    <button
      onClick={async () => {
        const resp = await fetch("/api")
        if (!resp.ok) {
          return alert("API is down")
        }
        setState(+(await resp.text()))
      }}
    >
      State is: {state}
    </button>
  )
}

render(<App />, document.getElementById("app")!)
