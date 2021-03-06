import styled from 'styled-components'

export const NavTreeWrap = styled.div`
  flex: 0 0 230px;
  display: flex;
  flex-direction: column;
  width: 230px;
  padding: 0 0 20px;
  border-right: 1px solid rgba(0, 0, 0, 0.08);

  &.sort-mode {
    .sort-handle {
      &.sortable-drag {
        background: #d1e4f6;
        border: 1px solid #6fb2ec;
        opacity: 0.1;
        box-shadow: 10px 5px 12px #dedede;
        .node-header {
          border: 0;
          background-color: transparent;
        }
        .node-content {
          display: none;
        }
      }
    }
  }

  .tool-bar {
    display: flex;
    padding-top: 1px;
    .anticon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 2px;
      font-size: 12px;
      &:hover {
        color: #fff;
        background: #80a9cc;
      }
    }
  }
`

export const NavNode = styled.div`
  &.expand {
    .node-content {
      border-bottom: 1px solid #e5e5e7;
    }

    .node-header {
      background: #dbebf9;
      .anticon-right {
        transform: rotate(90deg);
      }
    }
  }

  .node-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 38px;
    padding: 0 10px;
    font-size: 14px;
    border-bottom: 1px solid #e5e5e7;
    cursor: pointer;

    .node-label {
      padding-left: 6px;
    }
    .anticon-right {
      transform: rotate(0) translateX(0);
      transition: transform 0.25s;
    }
  }

  .node-content {
    /* max-height: 0; */
    /* height: auto; */
    overflow-y: hidden;
    transition: height 0.25s;
  }
`

export const NavField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 0 10px 0 30px;
  cursor: pointer;

  &:first-child {
    margin-top: 8px;
  }

  &:last-child {
    margin-bottom: 8px;
  }

  &:hover {
    background-color: #e6f0f9;
  }

  &.active {
    background-color: #c1e1fe;
  }

  .field-label {
    display: flex;
  }

  .field-tool {
    display: flex;
  }

  .field-icons {
    display: flex;
    font-size: 12px;
  }
`

export const TableTool = styled.div`
  .field-tool {
    display: flex;
  }
`

export const FieldTool = styled.div`
  .node-tool {
    display: flex;
  }
`
