import styled from 'styled-components'

export const Container = styled.div`
  padding: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const Table = styled.table`
  border-radius: 20px;
  width: 100%;
  


  > thead {
    border-radius: 20px;
    height: 38px;
    width: 100%;

    >  tr {
      width: 100%;
      justify-content: space-evenly;
      align-items: center;

      > th {
        border-radius: 20px;
        height: 36px;
        background: #512;
        flex-direction: row;

      }
    }
  }


`
