package m5.furamaapi.service;

import m5.furamaapi.model.dto.UserDTO;
import m5.furamaapi.model.entity.User;
import m5.furamaapi.repository.RoleRepository;
import m5.furamaapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> opUser = userRepository.findFirstByUsername(username);

        UserDTO userDTO = null;
        if(opUser.isPresent()) {
            userDTO = new UserDTO();

            Set<GrantedAuthority> authorities = new HashSet<>();
            roleRepository.getRoleByUserId(opUser.get().getId()).forEach(e-> {
                authorities.add(new SimpleGrantedAuthority(e));
            });

            userDTO.setId(opUser.get().getId());
            userDTO.setUsername(opUser.get().getUsername());
            userDTO.setPassword(opUser.get().getPassword());
            userDTO.setAuthorities(authorities);
        }

        return userDTO;
    }

    @Override
    public User save(User user) {
        String md5Password = passwordEncoder.encode(user.getPassword());
        user.setPassword(md5Password);
        return userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public int delete(int id) {
        return 0;
    }
}
