const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('preco')
class Preco {
  @PrimaryColumn()
  i_cdproduto: number;
  
  @Column()
  n_precovenda: number;

  @Column()
  i_cdlista_preco: number;
  
}

export default Preco;