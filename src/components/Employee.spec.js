import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import Employee from './Employee'

const setup = (editing = false) => {
    const props = {
        employee: {
            "id": "2cb362a8-5f10-4b6e-bb68-fd202c338b13",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/spedwig/128.jpg",
            "firstName": "Levi",
            "lastName": "Hessel",
            "jobTitle": "Investor Applications Executive",
            "age": 20,
            "bio": "Qui possimus consequuntur quas aut ut. Unde officiis sapiente similique ut aliquam dolore. Explicabo doloremque esse magnam natus fugiat. Facere excepturi dolores qui numquam ut quia non fugiat. Nulla non laudantium est temporibus vel autem.",
            "dateJoined": "2017-12-09T13:56:53.175Z"
        }
    }

    const renderer = createRenderer()

    renderer.render(
        <Employee {...props} />
    )

    let output = renderer.getRenderOutput()

    return {
        props: props,
        output: output,
        renderer: renderer
    }
}

describe('components', () => {
    describe('Employee', () => {
        it('initial render', () => {
            const { output } = setup()
            expect(output.type).toBe('div')
            expect(output.props.children.length).toBe(2);
            expect(output.props.children[0].props.className).toBe('hidden-xs');
      })
    })
})
