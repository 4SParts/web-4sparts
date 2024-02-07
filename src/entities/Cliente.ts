const { Column, Entity, PrimaryColumn } = require('typeorm');


@Entity('cliente')
class Cliente {
  @PrimaryColumn()
  i_cdcliente: Number;

  @Column()
  i_cdarea: Number;
 
  @Column()
  c_cnpj: string;

  @Column()
  c_cpf: string;

  @Column()
  c_nome: string;

  @Column()
  c_nomefantas: string;

  @Column()
  c_rgorgao: string;

  @Column()
  c_inscrestadual: string;
  
  @Column()
  i_cdclasse: string;

  @Column()
  i_cdcidade: string;

  @Column()
  c_endereco: string;

  @Column()
  c_bairro: string;

  @Column()
  c_cep: string;

  @Column()
  c_contato: string;

  @Column()
  c_email: string;

  @Column()
  c_telefone: string;
  
  @Column()
  c_telefone2: string;

  @Column()
  c_telefone3: string;

  @Column()
  i_cdarea: number;
  
  @Column()
	c_numend: string;
  
  @Column()
	c_compend: string;
  
  @Column()
	d_inicioatividade: string;
  
  @Column()
	c_cdsuframa: string;
  
  

}

export default Cliente;