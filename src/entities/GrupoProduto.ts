const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('grupoproduto')
class GrupoProduto {
  @PrimaryColumn()
  i_cdgrupo: number;

  @Column()
  c_descricao: string;

}

export default GrupoProduto;