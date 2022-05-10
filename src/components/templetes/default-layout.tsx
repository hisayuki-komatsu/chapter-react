import { Footer } from '../atoms/footer/footer'
import { Header } from '../atoms/header/header'

export const Layout = (props: any) => {
  const { children } = props
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  )
}
