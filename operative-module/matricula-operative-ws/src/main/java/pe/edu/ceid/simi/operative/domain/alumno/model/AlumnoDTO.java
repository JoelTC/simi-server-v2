package pe.edu.ceid.simi.operative.domain.alumno.model;

public class AlumnoDTO {
	private String fecha_alta;
	private String codigo;
	private String dni;
	private String nombre;
	private String idioma;
	private double nota;
	private String periodo;
	private String mes;
	private String  fecha;
	public AlumnoDTO(String fecha_alta, String codigo, String dni, String nombre, String idioma, double nota,
			String periodo, String mes, String fecha) {
		super();
		this.fecha_alta = fecha_alta;
		this.codigo = codigo;
		this.dni = dni;
		this.nombre = nombre;
		this.idioma = idioma;
		this.nota = nota;
		this.periodo = periodo;
		this.mes = mes;
		this.fecha = fecha;
	}
	public String getFecha_alta() {
		return fecha_alta;
	}
	public void setFecha_alta(String fecha_alta) {
		this.fecha_alta = fecha_alta;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getDni() {
		return dni;
	}
	public void setDni(String dni) {
		this.dni = dni;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getIdioma() {
		return idioma;
	}
	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}
	public double getNota() {
		return nota;
	}
	public void setNota(double nota) {
		this.nota = nota;
	}
	public String getPeriodo() {
		return periodo;
	}
	public void setPeriodo(String periodo) {
		this.periodo = periodo;
	}
	public String getMes() {
		return mes;
	}
	public void setMes(String mes) {
		this.mes = mes;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	
	
	
	/*private int idPersona;
	private String nomPersona;
	private String apPaterno;
	private String apMaterno;
	private int dni;
	private int genero;
	private int edad;
	private int idUsuario;
	private String codUsuario;
	private String email;
	private int idRol;
	private String nomRol;
	private int estado;
	private int idTipo;
	private String nomTipo;
	
	public AlumnoDTO(int idPersona, String nomPersona, String apPaterno, String apMaterno, int dni, int genero,
			int edad, int idUsuario, String codUsuario, String email, int idRol, String nomRol, int estado, int idTipo,
			String nomTipo) {
		super();
		this.idPersona = idPersona;
		this.nomPersona = nomPersona;
		this.apPaterno = apPaterno;
		this.apMaterno = apMaterno;
		this.dni = dni;
		this.genero = genero;
		this.edad = edad;
		this.idUsuario = idUsuario;
		this.codUsuario = codUsuario;
		this.email = email;
		this.idRol = idRol;
		this.nomRol = nomRol;
		this.estado = estado;
		this.idTipo = idTipo;
		this.nomTipo = nomTipo;
	}

	public int getIdPersona() {
		return idPersona;
	}

	public void setIdPersona(int idPersona) {
		this.idPersona = idPersona;
	}

	public String getNomPersona() {
		return nomPersona;
	}

	public void setNomPersona(String nomPersona) {
		this.nomPersona = nomPersona;
	}

	public String getApPaterno() {
		return apPaterno;
	}

	public void setApPaterno(String apPaterno) {
		this.apPaterno = apPaterno;
	}

	public String getApMaterno() {
		return apMaterno;
	}

	public void setApMaterno(String apMaterno) {
		this.apMaterno = apMaterno;
	}

	public int getDni() {
		return dni;
	}

	public void setDni(int dni) {
		this.dni = dni;
	}

	public int getGenero() {
		return genero;
	}

	public void setGenero(int genero) {
		this.genero = genero;
	}

	public int getEdad() {
		return edad;
	}

	public void setEdad(int edad) {
		this.edad = edad;
	}

	public int getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getCodUsuario() {
		return codUsuario;
	}

	public void setCodUsuario(String codUsuario) {
		this.codUsuario = codUsuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getIdRol() {
		return idRol;
	}

	public void setIdRol(int idRol) {
		this.idRol = idRol;
	}

	public String getNomRol() {
		return nomRol;
	}

	public void setNomRol(String nomRol) {
		this.nomRol = nomRol;
	}

	public int getEstado() {
		return estado;
	}

	public void setEstado(int estado) {
		this.estado = estado;
	}

	public int getIdTipo() {
		return idTipo;
	}

	public void setIdTipo(int idTipo) {
		this.idTipo = idTipo;
	}

	public String getNomTipo() {
		return nomTipo;
	}

	public void setNomTipo(String nomTipo) {
		this.nomTipo = nomTipo;
	}*/
	
}
