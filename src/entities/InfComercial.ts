const { Column, Entity, PrimaryColumn } = require('typeorm');

@Entity("infcomercial")
class InfComercial {
  @PrimaryColumn()
  c_empresa: string;

  @Column()
  i_cdfuncionario: number;

  @Column()
  i_cdcliente: number;

  @Column()
  c_informante: string;

  @Column()
  c_telefone: string;

}

export default InfComercial;