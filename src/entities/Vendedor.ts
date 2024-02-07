const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity("vendedor")
class Vendedor {
  @PrimaryColumn()
  i_cdvendedor: number;

  @Column()
  c_nome: string;

  @Column()
  senha_intranet: string;

  @Column()
  f_vendedor: string;

  @Column()
  f_situacao: string;


}

export default Vendedor;
