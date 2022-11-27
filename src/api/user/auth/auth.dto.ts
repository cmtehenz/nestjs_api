import { Trim } from 'class-sanitizer';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  /**
   * O e-mail é necessário para o login
   * O email é único não sendo possível registrar dois usuários com mesmo email
   * @example email@email.com
   */
  @Trim()
  @IsEmail()
  public readonly email: string;

  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  @IsString()
  @MinLength(8)
  public readonly password: string;

  /**
   * O nome será utilizado para qualquer coisa (Perfil, Home Page, etc) que precise exibir
   * informações da pessoa conectada.
   * @example Gustavo Costa
   */
  @IsString()
  @IsOptional()
  public readonly name?: string;

  /**
   * O campo role é necessário para saber quais os acessos o usuário vai ter
   * é um campo obrigatório
   * @example admin | employee
   */
  @IsString()
  public readonly role: string;
}

export class LoginDto {
  /**
   * O e-mail é necessário para o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */
  @Trim()
  @IsEmail()
  public readonly email: string;

  /**
   * É possível conectar com redes sociais sem uma senha, mas para login usando o e-mail diretamente
   * é necessário informar uma senha.
   * @example 123@abc
   */
  @IsString()
  public readonly password: string;
}
