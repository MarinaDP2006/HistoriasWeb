<<<<<<< HEAD
export interface User {
  email: string;
  password?: string;    // solo para login, no guardar en producción
  name?: string;
  role?: 'reader' | 'writer' | 'admin';
  token?: string;       // para autenticación JWT
  avatar?: string;
}
=======
export interface User {
  email: string;
  password: string;
}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
