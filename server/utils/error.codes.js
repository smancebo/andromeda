const ErrCodes = [
  { code: 'E_BAD_USR_PASS', msg: 'Usuario o Contraseña incorrectos' },
  { code: 'E_USR_DISABLED', msg: 'Cuenta deshabilitada' },
  { code: 'E_INV_TOKEN', msg: 'Token Invalido' },
  { code: 'E_USR_NOT_AUTH', msg: 'No authenticado!' },
  { code: 'E_NOT_FOUND', msg: 'Recurso no encontrado' },
  { code: 'USR_SUCCESS' },
  { code: 'E_SRV_ERR' },
  { code: 'VALID_TKN' },
];

module.exports = ErrCodes;
