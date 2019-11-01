import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 0;
  background: #fff;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 20px 15px;
  border-right: 1px solid #eee;
  left: ${props => (!props.show ? '-300px' : '0px')};
  transition: left ease 0.4s;

  .header {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;

    .closebtn,
    .removeBtn {
      border: none;
      background: transparent;
      padding: 5px;
    }

    .closebtn {
      margin-right: 10px;
    }

    .removeBtn {
      &:hover {
        color: red;
      }
    }

    h4 {
      font-size: 22px;
      margin-top: 2px;
      margin-bottom: 0;
      line-height: 35px;
      width: 100%;
    }
  }

  .form-group {
    width: 100%;
  }

  .submitEvent {
    background: transparent;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;
    width: 150px;
    height: 42px;
    border: 2px solid #ced4da;
    margin-top: 40px;
    border-radius: 21px;
    padding-left: 30px;
    transition: all 0.5s;

    &:hover {
      box-shadow: 0 5px 13px rgba(0, 0, 0, 0.08);
      transition: all 0.5s;
    }

    > div {
      position: absolute;
      left: calc(-38%);
    }
  }
`
