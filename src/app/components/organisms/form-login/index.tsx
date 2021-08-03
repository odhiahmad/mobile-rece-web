import * as React from 'react';
import Input from 'app/components/atoms/input/loadable';
import Button from 'app/components/atoms/button/loadable';
import userLogo from 'assets/img/login/user.png';
import lockLogo from 'assets/img/login/lock.png';

export function FormLogin() {
  return (
    <form>
      <div className="mb-3">
        <Input logo={userLogo} colorScheme="grey" placeholder="Username" />
        <Input
          logo={lockLogo}
          type="password"
          colorScheme="grey"
          placeholder="Password"
        />
      </div>
      <Button fullWidth className="mb-1">
        MASUK
      </Button>
    </form>
  );
}
