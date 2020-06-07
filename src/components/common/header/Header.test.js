import React from 'react'
import { Link } from "react-router-dom"
import { headerbarRoutes } from '../../../utils/routes'
import Header from './Header'
import { shallow } from 'enzyme'


describe('Testing Header Component', () => {

    test.skip('Number of Link should match headerbarRoutes', () => {
        const headerWrapper = shallow(<Header />)
        expect(headerWrapper.find(Link).length).toEqual(headerbarRoutes.length)
    })



})