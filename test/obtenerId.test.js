const tarea = require('../controllers/tareasController');

test('obtener por id', () => {
    const req = {
    params: {
        id: 1
    }};
    const res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
    };

    tarea.detalleTarea(req, res);

    expect(res.json).toHaveBeenCalledWith({
        id: 1,
        titulo: "Estudiar Git",
        descripcion:
            "Aprender a usar Git para control de versiones"
    });
});