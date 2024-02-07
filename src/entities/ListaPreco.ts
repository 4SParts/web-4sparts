const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity('lista_preco')
class ListaPreco {
  @PrimaryColumn()
  i_cdlista_preco: number;

  @Column()
  d_inicio: Date;

  @Column()
  d_vencimento: Date;

}

export default ListaPreco;