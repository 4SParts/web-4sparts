const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('linhaproduto')
class LinhaProduto {
  @PrimaryColumn()
  i_cdlinha: number;

  @Column()
  c_descricao: string;

}

export default LinhaProduto;