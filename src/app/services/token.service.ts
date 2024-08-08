import jsonwebtoken from 'jsonwebtoken'
import moment from 'moment'
import {jwt} from "../../config/env.config";
import {Service} from "typedi";
import {TokenTypes} from "@common/constants";

@Service()
export class TokenService {
  async generateAuthTokens(user) {
    const accessTokenExpire = moment().add(jwt.accessExpireIn as moment.unitOfTime.DurationConstructor, jwt.accessExpireFormat);
    const accessToken = this.generateToken(user.id, accessTokenExpire.unix(), TokenTypes.ACCESS);

    // await this.saveToken(refreshToken, user.id, refreshTokenExpire.toDate(), TokenTypes.REFRESH);

    return {
      access: {
        token: accessToken,
        expires: accessTokenExpire.unix(),
      },
    };
  }
  generateToken(userId: number, expire: number, type: string) {
    const payload = {
      sub: userId,
      iat: moment().unix(),
      exp: expire,
      type,
    }

    return jsonwebtoken.sign(payload, jwt.secret)
  }
}
