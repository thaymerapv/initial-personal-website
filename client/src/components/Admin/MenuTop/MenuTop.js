import React from "react";
import logo
    from '../../../assets/img/png/png-transparent-logo-cuisine-font-brand-product-crash-bandicoot-mutant-island-text-crash-bandicoot-n-sane-trilogy-logo.png'
import './MenuTop.scss'
import {Button} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined} from "@ant-design/icons";

export default function MenuTop(props) {
    const {menuCollapse, setMenuCollapse} = props
    return (
        <div className={'menu-top'}>
            <div className={'menu-top__left'}>
                <img className={'menu-top__left-logo'} src={logo} alt={'tapv'}/>
                <Button type={'link'} onClick={() => setMenuCollapse(!menuCollapse)}>
                    {menuCollapse ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}

                </Button>
            </div>
            <div className={'menu-top__right'}>
                <Button type={'link'}>
                    <PoweroffOutlined/>
                </Button>
            </div>
        </div>
    )
}
