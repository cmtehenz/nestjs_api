import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Time } from '../time/time.entity';

@Entity()
export class User extends BaseEntity {
  /**
   * O id é um numero gerado automaticamente
   * @example 562
   */
  @PrimaryGeneratedColumn()
  public id!: number;

  /**
   * O e-mail é necessário para o login
   * O email é único não sendo possível registrar dois usuários com mesmo email
   * @example email@email.com
   */
  @Column({ type: 'varchar' })
  public email!: string;

  /**
   * Senha para fazer o login necessário 8 caracteres
   * é necessário informar uma senha.
   * @example 1234@abc
   */
  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;

  /**
   * O nome será utilizado para mostrar
   * informações da pessoa conectada.
   * @example Gustavo Costa
   */
  @Column({ type: 'varchar', nullable: true })
  public name: string | null;

  @Column({ type: 'varchar', nullable: true })
  public role: string | null;

  @OneToMany((type) => Time, (user) => User)
  times: Time[];

  @Column({ type: 'timestamp', nullable: true, default: null })
  public lastLoginAt: Date | null;

  constructor(user?: Partial<User>) {
    super();
    this.id = user?.id;
    this.name = user?.name;
    this.email = user?.email;
    this.role = user?.role;
    this.lastLoginAt = user?.lastLoginAt;
  }
}
