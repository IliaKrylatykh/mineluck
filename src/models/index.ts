import { BetModel } from './BetModel'
import { ProgressModel } from './ProgressModel'
import { ReelModel } from './ReelModel'
import { ResultModel } from './ResultModel'

export class Models {
	progress: ProgressModel = new ProgressModel()
	bet: BetModel = new BetModel()
	result: ResultModel = new ResultModel()
	reel: ReelModel = new ReelModel()
}
