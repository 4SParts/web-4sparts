const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity('condicaopagto')
class PrazoVenda {
  @PrimaryColumn()
  i_cdcondicaopagto: number;

  @Column()
  c_prazo: string;

  @Column()
  i_nrparcela: number;

  @Column()
  n_vlrminimo_condpagto: string;

  @Column()
  i_prazomedio: number;

}

export default PrazoVenda;