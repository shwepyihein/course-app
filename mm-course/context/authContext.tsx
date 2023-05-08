import { useRouter } from "next/router"
import React, { createContext, useContext, useEffect, useState } from "react"
import { Login_user, register_user } from "../api/user"
import DialogModel from "../components/courseDialog"
import { useForm } from "react-hook-form"

interface ServerError {
  error: string
  message: string[]
  statusCode: number
}

export interface IUserContext {
  isAuthenticated: boolean
  Logout: () => void
  Login: (email: string, password: string) => void
  handleOpen: (type: string) => void
  authLoading: boolean
  error: ServerError | undefined
  networkError: Error | undefined
  user: any
}

interface IState {
  isAuthenticated: boolean
  error?: ServerError
  user: any
}

const defaultState: IUserContext = {
  isAuthenticated: true,
  Logout: () => {},
  Login: () => {},
  handleOpen: () => {},
  networkError: undefined,
  authLoading: false,
  error: undefined,
  user: null,
}

const AuthContext = createContext<IUserContext>(defaultState)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter()

  const [authLoading, setAuthLoading] = useState(false)

  const [networkError, setNetworkError] = useState<Error | undefined>()

  const [state, setState] = useState<IState>({
    isAuthenticated: false,
    user: null,
  })

  const [open, setOpen] = useState(false)
  const [type, setType] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    mode: "onChange",
  })

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    const user: any = localStorage.getItem("user")
    if (token) {
      setState({ ...state, user: JSON.parse(user), isAuthenticated: true })
    }
  }, [])

  const Login = async (email: string, password: string) => {
    try {
      const res: any = await Login_user({
        identifier: email,
        password: password,
      })
      console.log(res)

      if (res.login) {
        localStorage.setItem("accessToken", res.login.jwt)
        localStorage.setItem("user", JSON.stringify(res.login.user))
        setState({ ...state, user: res.login.user, isAuthenticated: true })
        setOpen(false)
        setAuthLoading(false)
      } else {
        setState({ ...state, error: res.data })
      }
    } catch (error: any) {
      setNetworkError(error)
    }
  }

  const Register = async (data: any) => {
    try {
      const res: any = await register_user(data)

      if (res.register) {
        localStorage.setItem("accessToken", res.register.jwt)
        localStorage.setItem("user", JSON.stringify(res.register.user))
        setState({ ...state, user: res.register.user, isAuthenticated: true })

        setOpen(false)
        setAuthLoading(false)
      } else {
        setState({ ...state, error: res.error })
      }
    } catch (error) {}
  }

  const onSubmit = (data: any) => {
    if (type) {
      Login(data.email, data.password)
    } else {
      console.log(data)
      Register(data)
    }
  }

  const handleOpen = (v: string) => {
    setOpen(!open)
    setType(v === "login" ? true : false)
  }

  const Logout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("user")
    setAuthLoading(true)
    setState({ ...state, isAuthenticated: false })

    setAuthLoading(false)
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          isAuthenticated: state.isAuthenticated,
          Login,
          authLoading,
          networkError,
          Logout,
          handleOpen,
          user: state.user,
          error: state.error,
        }}
      >
        <DialogModel open={open} setOpen={setOpen}>
          <div></div>
          <div className="flex justify-center px-4 py-12 lg:flex-none ">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-10 w-auto"
                  src="logo_1.svg"
                  alt="Your Company"
                />
              </div>

              <div className="mt-10">
                <div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {!type && (
                      <div>
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          User Name
                        </label>
                        <div className="mt-2">
                          <input
                            {...register("username", {
                              required: "The User Name is Required",
                            })}
                            name="username"
                            autoComplete="username"
                            required
                            className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("email", {
                            required: "The Email is Required",
                            minLength: 8,
                          })}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          {...register("password", {
                            required: "The Password is Required",
                            minLength: 7,
                          })}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {type ? " Login " : "Register"}
                      </button>
                    </div>
                  </form>
                </div>

                <div className="mt-10">
                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm font-medium leading-6">
                      <span className="bg-white px-6 text-gray-900">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid  gap-4">
                    <a
                      href="https://api.hunterdox.com/api/connect/google"
                      className="flex w-full items-center justify-center gap-3 rounded-md bg- border bg-[#4285F4] text-white px-3 py-1.5  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                    >
                      <svg
                        className="mr-2 -ml-1 w-4 h-4"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="google"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 488 512"
                      >
                        <path
                          fill="currentColor"
                          d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                        ></path>
                      </svg>
                      <span className="text-sm font-semibold leading-6">
                        Sign up with Google
                      </span>
                    </a>

                    <a
                      href="#"
                      className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-semibold leading-6">
                        GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogModel>
        {children}
      </AuthContext.Provider>
    </>
  )
}

const useUserHook = () => {
  const state = useContext(AuthContext)
  return state
}

export { AuthProvider, AuthContext, useUserHook }
