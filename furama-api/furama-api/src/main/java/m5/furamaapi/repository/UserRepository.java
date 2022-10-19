package m5.furamaapi.repository;

import m5.furamaapi.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findFirstByUsername(String username);
}