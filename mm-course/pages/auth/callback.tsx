import { useRouter } from "next/router"
import React from "react"

const Callback = ({ query }: any) => {
  const router = useRouter()
  React.useEffect(() => {
    // Client-side code to set data in localStorage
    fetch(
      `https://api.hunterdox.com/api/auth/google/callback?id_token=${query}`
    ).then((res: any) => {
      console.log(res)
      if (res.ok) {
        localStorage.setItem("accessToken", res.token)
        localStorage.setItem("user", JSON.stringify(res.user))
        router.push("/")
      } else {
        throw new Error("Error occur")
      }
    })
  }, [])
  return null
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const query = context.query.id_token
  // Pass data to the page via props
  return { props: { query } }
}

export default Callback
