import styled from "@emotion/styled"
import MainLayout from "src/components/layout/MainLayout"

const Contact = () => {
  return (
    <MainLayout>
      <Container>
        <h1>Contact US</h1>
        <p>Contact us by email: buyamia@buyamia.com</p>
        <p>Contact us by phone: 886-324-781</p>
      </Container>
    </MainLayout>
  )
}

export default Contact

const Container = styled.div`
  background: #FFFFFF;
  border-radius: 25px;
  margin: 8px 0;
  padding: 16px;
  width: 50vw;

  h1 {
    font-weight: bold;
    font-size: 40px;
  }
`