package pe.edu.ceid.simi.operative.infraestructure.alumno.jdbc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;
import javax.swing.tree.TreePath;

import org.springframework.stereotype.Component;
import org.springframework.util.LinkedCaseInsensitiveMap;

import pe.edu.ceid.simi.operative.domain.alumno.model.AlumnoDTO;

@Component
public class AlumnoRowMapper implements RowMapper{
	
	public int[] getRowsForPaths(TreePath[] arg0) {
		// TODO Auto-generated method stub
		return null;
	}
	
	/*public List<AlumnoDTO> mapRowAlumno(List<Map<String, Object>> rows){
		List<AlumnoDTO> alumnos = new ArrayList<AlumnoDTO>();
	for(Map<String, Object> row: rows) {
		int idPersona = Integer.parseInt(row.get("ID_PERSONA").toString());
		String nomPersona = row.get("NOMBRE").toString();
		String apPaterno = row.get("APELLIDO_PAT").toString();
		String apMaterno= row.get("APELLIDO_MAT").toString();
		int dni = Integer.parseInt(row.get("DNI").toString());
		int genero = Integer.parseInt(row.get("GENERO").toString());
		int edad = Integer.parseInt(row.get("EDAD").toString());
		int idUsuario = Integer.parseInt(row.get("ID_USUARIO").toString());
		String codUsuario= row.get("COD_USUARIO").toString();
		String email= row.get("EMAIL").toString();
		int idRol = Integer.parseInt(row.get("FK_ID_ROL").toString());
		String nomRol= row.get("NOM_ROL").toString();
		int estado = Integer.parseInt(row.get("ESTADO").toString());
		int idTipo = Integer.parseInt(row.get("FK_ID_TIPO").toString());
		String nomTipo= row.get("NOM_TIPO").toString();
		
		AlumnoDTO i = new AlumnoDTO(idPersona, nomPersona, apPaterno, apMaterno, dni, genero,
				edad, idUsuario, codUsuario, codUsuario, idRol, nomRol, estado, idTipo, nomTipo);
		
		alumnos.add(i);
	}
	return alumnos;
}*/
	@SuppressWarnings("rawtypes")
	public AlumnoDTO mapRowAlumno(LinkedCaseInsensitiveMap row) {
		String codigo = row.get("CODIGO").toString();
		String dni = row.get("DNI").toString();
		String nombre = row.get("NOMBRE").toString();
		String idioma = row.get("IDIOMA").toString();
		String periodo = row.get("NOM_PERIODO").toString();
		String mes = row.get("MES").toString();
		String fecha = row.get("FECHA_MATRICULA").toString();
		AlumnoDTO i = new AlumnoDTO(codigo, dni, nombre, idioma, periodo, mes, fecha);
		return i;
	}

}
