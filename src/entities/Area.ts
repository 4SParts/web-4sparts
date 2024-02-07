const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity("varea")
class Area {
  @PrimaryColumn()
  i_cdvendedor: number;

  @Column()
  c_nome: string;

  @Column()
  i_cdarea: string;

  @Column()
  n_descmaximo: string;

  @Column()
  n_descmaximoprom: string;

  @Column()
  n_descmaximocpf: string;

  @Column()
  n_descmaximopromcpf: string;

  @Column()
  c_senha: string;

  @Column()
  f_vendedor: string;

}

export default Area;
