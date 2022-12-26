import { Spinner } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import MainLayout from 'src/components/layout/MainLayout'
import useSupplierDetail from 'src/utils/api/supplier/useSupplierDetail'

const SupplierDetail = () => {
  const router = useRouter()
  const { supplier } = useSupplierDetail(router.query.id as string)
  const { name, city, address, phoneNumber, category } = supplier || {}
  return (
    <MainLayout>
      <Container>
        {
          supplier ?
          <>
            <h1>Detail Supplier</h1>
            <h3><b>Name:</b> {name}</h3>
            <p><b>City:</b> {city}</p>
            <p><b>Address:</b> {address}</p>
            <p><b>Phone:</b> {phoneNumber}</p>
            <p>
              <b>category:</b>

            </p>
            {
              category?.map(({ name }) => {
                return name
              }).join(';')
            }
          </> :
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spinner />
          </div>
        }

      </Container>
    </MainLayout>
  )
}

export default SupplierDetail

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
