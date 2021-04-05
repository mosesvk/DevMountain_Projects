import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarRoute,
  SideBtnWrap,
  SidebarTotal,
} from "./SidebarElement";
import SidebarItem from './SidebarItem'

const Sidebar = (props) => {
  // console.log(cart)
  
  const {cart, isOpen, toggle, editItem, total, removeItem, clearCart} = props;

    return (
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        {cart.map((prod, index) => {
          return (
            <SidebarItem prod={prod} removeItem={removeItem} editItem={editItem}/>
          )
        })}
        <SideBtnWrap>
          <SidebarTotal>Total: ${total}</SidebarTotal>
          <SidebarRoute to="/" onClick={clearCart}>Order Now</SidebarRoute>
        </SideBtnWrap>
      </SidebarContainer>
    );
};

export default Sidebar;
