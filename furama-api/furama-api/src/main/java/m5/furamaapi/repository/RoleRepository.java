package m5.furamaapi.repository;

import m5.furamaapi.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RoleRepository extends JpaRepository<Role, Integer> {

    @Query(value = "SELECT\n" +
            "    r.`name`\n" +
            "from\n" +
            "    role r\n" +
            "    JOIN user_role ur on r.id = ur.role_id\n" +
            "    JOIN `user` u on ur.user_id = u.id\n" +
            "WHERE\n" +
            "    u.id = :userId", nativeQuery = true)
    List<String> getRoleByUserId(int userId);
}
