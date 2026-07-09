import { useEffect } from "react"

type JsonLdProps = {
  id: string
  data: unknown
}

const JsonLd = ({ id, data }: JsonLdProps) => {
  useEffect(() => {
    const existing = document.getElementById(id) as HTMLScriptElement | null
    const script = existing || document.createElement("script") as HTMLScriptElement 

    script.id = id
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(data)

    if (!existing) {
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [id, data])

  return null
}

export default JsonLd
