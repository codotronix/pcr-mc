import React from 'react'
import { Link } from "react-router-dom"
import { headerbarRoutes } from '../../../utils/routes'
import { Header } from './Header'
import { shallow } from 'enzyme'
import { jssPreset } from '@material-ui/core'


describe('Testing Header Component', () => {
    let headerWrapper;

    beforeEach(() => {
        const mockProps = {
            history: {
                location: {
                    pathname: '/gamepad'
                }
            },
            openSidebar: jest.fn()
        }
        headerWrapper = shallow(<Header {...mockProps} />)
    })


    test('Number of Link should match headerbarRoutes', () => {
        expect(headerWrapper.find(Link).length).toEqual(headerbarRoutes.length)
    })



})