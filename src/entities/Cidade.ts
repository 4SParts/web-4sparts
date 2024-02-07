const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity("vcidade")
class Vcidade {
  @PrimaryColumn()
  i_cdCidade: number;

  @Column()
  c_nomecidade: string;

  @Column()
  c_uf: string;

}

export default Vcidade;