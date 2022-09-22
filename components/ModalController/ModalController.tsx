import React, { memo } from "react"
import ErrorBoundary from "../_reusables/ErrorBoundary"
import ModalDesingersForm from "../_modals/ModalDesignersForm/ModalDesingersForm"
import { useRouter } from "next/dist/client/router"

type ModalComponentType = typeof ErrorBoundary | React.FC

type RoutesType = {
  [key: string]: Array<ModalComponentType>
}

const routes: RoutesType = {
  "/sotrudnichestvo": [ModalDesingersForm],
  "/": [ModalDesingersForm],
}

export const ModalController = memo(() => {
  const router = useRouter()
  const route = router.route

  return (
    <>
      {routes[route]?.map((Modal: typeof ErrorBoundary, index: number) => {
        return <Modal key={index} />
      })}
    </>
  )
})
