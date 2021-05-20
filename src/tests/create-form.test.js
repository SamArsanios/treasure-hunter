import form from '../Objects/PlayerForm';

const scene = {
    sys: {
        game: {
            globals: {
                playerName: "Angelos"
            }
        }
    }
};

describe('Helpers for scenes', () => {
    // test('createForm generates the form', () => {
    //     expect(document.querySelector('body').children.length).toBe(1);
    // });

    test('form is correctly built', () => {
        form.createForm(scene);
        const forms = document.querySelector('form')
        expect(forms.children.length).toBe(2);
        expect(forms.children[0].placeholder).toBe('Please Enter your Name');
        expect(forms.children[0].getAttribute('type')).toBe('text');
        expect(forms.children[1].getAttribute('type')).toBe('submit');
    });
});