import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { profileStats } from '@/lib/constants';
import { 
  Wallet, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Calendar,
  CheckCircle,
  Crown,
  Globe,
  Clock,
  Shield
} from 'lucide-react';

export function ProfileStats() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Wallet className="h-5 w-5 text-accent" />
            <h3 className="font-semibold">Total Transactions</h3>
          </div>
          <p className="text-2xl font-bold">{profileStats.transactions.toLocaleString()}</p>
        </Card>
        <Card className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <ArrowUpRight className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold">Total Sent</h3>
          </div>
          <p className="text-2xl font-bold">₦{profileStats.totalSent.toLocaleString()}</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Verification Status</span>
            </div>
            <Badge variant="secondary" className="bg-green-500/10 text-green-500">
              {profileStats.verificationStatus}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Crown className="h-5 w-5 text-yellow-500" />
              <span>Account Type</span>
            </div>
            <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500">
              {profileStats.accountType}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <span>Language</span>
            </div>
            <span>{profileStats.language}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-purple-500" />
              <span>Time Zone</span>
            </div>
            <span>{profileStats.timezone}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>Two-Factor Auth</span>
            </div>
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              Enabled
            </Badge>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Linked Accounts</h3>
        <div className="space-y-3">
          {profileStats.linkedAccounts.map((account) => (
            <Button
              key={account}
              variant="outline"
              className="w-full justify-start"
            >
              {account}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}